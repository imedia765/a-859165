import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, Users, CreditCard, BarChart, Settings, FileText, Laptop, Code, GitBranch } from "lucide-react";

const UserManual = () => {
  return (
    <ScrollArea className="h-[800px] w-full rounded-md border border-white/10 p-4">
      <div className="space-y-8">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Book className="h-6 w-6 text-dashboard-accent1" />
          <h1 className="text-2xl font-semibold text-white">PWA Burton User Manual</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-dashboard-text">
            PWA Burton is a comprehensive platform designed for managing various aspects of a membership-based organization. 
            It provides tools for managing members, collectors, payments, and system administration.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="features" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium text-dashboard-accent2">
              <div className="flex items-center gap-2">
                <Laptop className="h-5 w-5" />
                Key Features
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-dashboard-text space-y-4 pt-4">
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="p-4 bg-dashboard-card border-white/10">
                    <div className="flex items-start gap-3">
                      {feature.icon}
                      <div>
                        <h3 className="font-medium text-dashboard-accent1 mb-1">{feature.title}</h3>
                        <p className="text-sm text-dashboard-text">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tech" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium text-dashboard-accent2">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Technologies Used
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-dashboard-text space-y-4 pt-4">
              <div className="grid gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <GitBranch className="h-4 w-4 text-dashboard-accent1" />
                    <div>
                      <span className="font-medium text-dashboard-accent2">{tech.name}:</span>{" "}
                      <span className="text-dashboard-text">{tech.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Add more sections as needed */}
        </Accordion>
      </div>
    </ScrollArea>
  );
};

const features = [
  {
    title: "User Authentication",
    description: "Securely manages user access with a role-based authentication system.",
    icon: <Users className="h-5 w-5 text-dashboard-accent1" />
  },
  {
    title: "Member Management",
    description: "Comprehensive management of member profiles, including searching, viewing, and updating member information.",
    icon: <Users className="h-5 w-5 text-dashboard-accent1" />
  },
  {
    title: "Payment Processing",
    description: "Streamlines payment recording, tracking, and reporting.",
    icon: <CreditCard className="h-5 w-5 text-dashboard-accent1" />
  },
  {
    title: "Financial Reporting",
    description: "Robust tools for analyzing financial data and generating summaries.",
    icon: <BarChart className="h-5 w-5 text-dashboard-accent1" />
  },
  {
    title: "System Administration",
    description: "Tools for managing system configurations, user roles, and announcements.",
    icon: <Settings className="h-5 w-5 text-dashboard-accent1" />
  },
  {
    title: "PDF Generation",
    description: "Create PDF documents for reports and data export.",
    icon: <FileText className="h-5 w-5 text-dashboard-accent1" />
  }
];

const technologies = [
  {
    name: "Frontend Framework",
    description: "React with TypeScript for building interactive user interfaces"
  },
  {
    name: "UI Library",
    description: "Tailwind CSS for utility-first styling and Radix UI for accessible components"
  },
  {
    name: "State Management",
    description: "Tanstack Query for server state and data fetching"
  },
  {
    name: "Backend",
    description: "Supabase providing database, authentication, and edge functions"
  },
  {
    name: "Build Tool",
    description: "Vite for fast development and optimized production builds"
  }
];

export default UserManual;
