import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FileDown, Loader2, BookOpen, Code, Users, CreditCard, BarChart4, Settings, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from '@tanstack/react-query';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UserManual = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const { data: currentManual, isLoading } = useQuery({
    queryKey: ['current-manual'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('documentation')
        .select('*')
        .eq('is_current', true)
        .maybeSingle();

      if (error) throw error;
      return data;
    }
  });

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      const { data, error } = await supabase.functions.invoke('generate-manual');
      if (error) throw error;
      window.open(data.url, '_blank');
      toast({
        title: "Success",
        description: "User manual generated successfully",
      });
    } catch (error) {
      console.error('Error downloading manual:', error);
      toast({
        title: "Error",
        description: "Failed to generate user manual",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <Loader2 className="w-6 h-6 animate-spin text-dashboard-accent1" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">PWA Burton User Manual</h2>
          {currentManual ? (
            <p className="text-sm text-dashboard-muted">
              Version {currentManual.version} • Last updated: {new Date(currentManual.updated_at).toLocaleDateString()}
            </p>
          ) : (
            <p className="text-sm text-dashboard-muted">Documentation Version 1.0</p>
          )}
        </div>
        <Button
          onClick={handleDownload}
          disabled={isGenerating}
          className="bg-dashboard-accent1 hover:bg-dashboard-accent1/80"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <FileDown className="w-4 h-4 mr-2" />
              Download Manual
            </>
          )}
        </Button>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="introduction" className="border border-white/10 rounded-lg">
          <AccordionTrigger className="px-4 py-2 hover:no-underline">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Introduction</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-dashboard-text">
            <p className="mb-4">
              PWA Burton is a comprehensive platform designed for managing various aspects of a membership-based organization. 
              It provides tools for managing members, collectors, payments, and system administration.
            </p>
            <p>
              Built using modern web technologies like React, TypeScript, and Supabase, PWA Burton follows a 
              component-based architecture to ensure scalability and maintainability.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="features" className="border border-white/10 rounded-lg">
          <AccordionTrigger className="px-4 py-2 hover:no-underline">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              <span>Key Features</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <ul className="space-y-4 text-dashboard-text">
              <li className="flex items-start gap-2">
                <Users className="w-5 h-5 mt-1 text-dashboard-accent2" />
                <div>
                  <h4 className="font-medium text-white">User Authentication</h4>
                  <p>Securely manages user access with a role-based authentication system.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CreditCard className="w-5 h-5 mt-1 text-dashboard-accent2" />
                <div>
                  <h4 className="font-medium text-white">Payment Processing</h4>
                  <p>Streamlines payment recording, tracking, and reporting.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <BarChart4 className="w-5 h-5 mt-1 text-dashboard-accent2" />
                <div>
                  <h4 className="font-medium text-white">Financial Reporting</h4>
                  <p>Offers robust tools for analyzing financial data and generating summaries.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Settings className="w-5 h-5 mt-1 text-dashboard-accent2" />
                <div>
                  <h4 className="font-medium text-white">System Administration</h4>
                  <p>Comprehensive tools for managing system configurations and user roles.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-5 h-5 mt-1 text-dashboard-accent2" />
                <div>
                  <h4 className="font-medium text-white">Audit Logging</h4>
                  <p>Maintains detailed records of system events and user actions.</p>
                </div>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="getting-started" className="border border-white/10 rounded-lg">
          <AccordionTrigger className="px-4 py-2 hover:no-underline">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Getting Started</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-dashboard-text">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2">Login Process</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Navigate to the login page</li>
                  <li>Enter your member number</li>
                  <li>Click "Login" to proceed</li>
                  <li>First-time users will need to verify their identity</li>
                </ol>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Dashboard Overview</h4>
                <p>
                  The dashboard provides quick access to key information and metrics. Use the sidebar 
                  navigation to access different sections of the application.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="member-management" className="border border-white/10 rounded-lg">
          <AccordionTrigger className="px-4 py-2 hover:no-underline">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Member Management</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-dashboard-text">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2">Managing Members</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>View and search member profiles</li>
                  <li>Update member information</li>
                  <li>Track payment history</li>
                  <li>Manage family members</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Collector Management</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Assign members to collectors</li>
                  <li>Monitor collector performance</li>
                  <li>Generate collection reports</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="payments" className="border border-white/10 rounded-lg">
          <AccordionTrigger className="px-4 py-2 hover:no-underline">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              <span>Payments & Financial Management</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-dashboard-text">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2">Payment Processing</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Record new payments</li>
                  <li>Track payment status</li>
                  <li>Generate payment receipts</li>
                  <li>View payment history</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Financial Reporting</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>View financial summaries</li>
                  <li>Generate collection reports</li>
                  <li>Track collector performance</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default UserManual;