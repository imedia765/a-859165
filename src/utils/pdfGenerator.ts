import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Database } from '@/integrations/supabase/types';

type Member = Database['public']['Tables']['members']['Row'];

export const generateMembersPDF = (members: Member[], title: string = 'Members Report') => {
  const doc = new jsPDF();
  console.log('Generating PDF for', members.length, 'members');
  
  // Add title and date
  doc.setFontSize(18);
  doc.text(title, 14, 15);
  doc.setFontSize(11);
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 25);
  doc.text(`Total Members: ${members.length}`, 14, 32);

  // Group members by collector
  const membersByCollector = members.reduce((acc, member) => {
    const collector = member.collector || 'Unassigned';
    if (!acc[collector]) {
      acc[collector] = [];
    }
    acc[collector].push(member);
    return acc;
  }, {} as Record<string, Member[]>);

  console.log('Grouped members by collector:', Object.keys(membersByCollector).length, 'collectors');

  let startY = 40;
  let currentPage = 1;

  // Define table columns
  const columns = [
    { header: 'Member #', dataKey: 'member_number' },
    { header: 'Name', dataKey: 'full_name' },
    { header: 'Contact', dataKey: 'contact' },
    { header: 'Address', dataKey: 'address' },
    { header: 'Status', dataKey: 'status' },
    { header: 'Type', dataKey: 'type' }
  ];

  // Generate tables for each collector group
  Object.entries(membersByCollector).forEach(([collector, collectorMembers], index) => {
    console.log(`Processing collector ${collector} with ${collectorMembers.length} members`);

    // Always start a new page for each collector except the first one
    if (index > 0) {
      doc.addPage();
      currentPage++;
      startY = 20;
    }

    // Add collector section header
    doc.setFontSize(14);
    doc.text(`Collector: ${collector}`, 14, startY);
    doc.setFontSize(11);
    doc.text(`Members: ${collectorMembers.length}`, 14, startY + 7);
    
    // Prepare data rows
    const rows = collectorMembers.map(member => ({
      member_number: member.member_number || 'N/A',
      full_name: member.full_name || 'N/A',
      contact: [
        member.email,
        member.phone
      ].filter(Boolean).join('\n') || 'N/A',
      address: [
        member.address,
        member.town,
        member.postcode
      ].filter(Boolean).join(', ') || 'N/A',
      status: member.status || 'N/A',
      type: member.membership_type || 'Standard'
    }));

    // Generate table with automatic page breaks
    autoTable(doc, {
      startY: startY + 15,
      head: [columns.map(col => col.header)],
      body: rows.map(row => columns.map(col => row[col.dataKey as keyof typeof row])),
      styles: { 
        fontSize: 8,
        cellPadding: 2,
        overflow: 'linebreak',
        cellWidth: 'wrap'
      },
      columnStyles: {
        member_number: { cellWidth: 20 },
        full_name: { cellWidth: 35 },
        contact: { cellWidth: 35 },
        address: { cellWidth: 45 },
        status: { cellWidth: 20 },
        type: { cellWidth: 25 }
      },
      headStyles: { 
        fillColor: [137, 137, 222],
        textColor: 255,
        fontStyle: 'bold'
      },
      alternateRowStyles: { 
        fillColor: [245, 245, 245] 
      },
      margin: { top: 15 },
      didDrawPage: (data) => {
        // Add page number to each page
        doc.setFontSize(10);
        // Cast doc.internal to any to access getNumberOfPages
        const pageNumber = (doc as any).internal.getNumberOfPages();
        doc.text(
          `Page ${pageNumber}`,
          doc.internal.pageSize.width - 30,
          doc.internal.pageSize.height - 10
        );
      }
    });

    // Update startY for next section
    const finalY = (doc as any).lastAutoTable.finalY;
    startY = finalY + 15;
  });

  // Save the PDF with a formatted date in the filename
  const date = new Date().toISOString().split('T')[0];
  const filename = `members-report-${date}.pdf`;
  console.log('Saving PDF as:', filename);
  doc.save(filename);
};