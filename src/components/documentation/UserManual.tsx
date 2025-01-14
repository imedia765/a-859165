import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Book, 
  Users, 
  CreditCard, 
  BarChart, 
  Settings, 
  FileText, 
  Laptop, 
  Code, 
  GitBranch,
  Terminal,
  Package,
  FolderTree,
  PlayCircle,
  Bug,
  FileCode
} from "lucide-react";

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
            Built using modern web technologies like React, TypeScript, and Supabase, it follows a component-based architecture 
            to ensure scalability and maintainability.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
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
                    {tech.icon}
                    <div>
                      <span className="font-medium text-dashboard-accent2">{tech.name}:</span>{" "}
                      <span className="text-dashboard-text">{tech.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="structure" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium text-dashboard-accent2">
              <div className="flex items-center gap-2">
                <FolderTree className="h-5 w-5" />
                Project Structure
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-dashboard-text space-y-4 pt-4">
              <div className="grid gap-4">
                {projectStructure.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileCode className="h-4 w-4 mt-1 text-dashboard-accent1" />
                    <div>
                      <span className="font-medium text-dashboard-accent2">{item.path}:</span>{" "}
                      <span className="text-dashboard-text">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="scripts" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium text-dashboard-accent2">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Available Scripts
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-dashboard-text space-y-4 pt-4">
              <div className="grid gap-4">
                {scripts.map((script, index) => (
                  <Card key={index} className="p-4 bg-dashboard-card border-white/10">
                    <div className="flex items-start gap-3">
                      <PlayCircle className="h-5 w-5 text-dashboard-accent1" />
                      <div>
                        <h3 className="font-medium text-dashboard-accent1 mb-1">{script.name}</h3>
                        <p className="text-sm text-dashboard-text">{script.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="testing" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium text-dashboard-accent2">
              <div className="flex items-center gap-2">
                <Bug className="h-5 w-5" />
                Testing Framework
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-dashboard-text space-y-4 pt-4">
              <div className="grid gap-4">
                {testingInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-4 w-4 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <span className="font-medium text-dashboard-accent2">{info.title}:</span>{" "}
                      <span className="text-dashboard-text">{info.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
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
    title: "Dashboard",
    description: "Provides an at-a-glance overview of key performance indicators and system status.",
    icon: <BarChart className="h-5 w-5 text-dashboard-accent1" />
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
    title: "Audit Logging",
    description: "Maintains detailed records of system events and user actions.",
    icon: <FileText className="h-5 w-5 text-dashboard-accent1" />
  }
];

const technologies = [
  {
    name: "Frontend Framework",
    description: "React with TypeScript for building interactive user interfaces",
    icon: <Code className="h-4 w-4 text-dashboard-accent1" />
  },
  {
    name: "UI Library",
    description: "Tailwind CSS for utility-first styling and Radix UI for accessible components",
    icon: <Package className="h-4 w-4 text-dashboard-accent1" />
  },
  {
    name: "State Management",
    description: "Tanstack Query for server state and data fetching",
    icon: <GitBranch className="h-4 w-4 text-dashboard-accent1" />
  },
  {
    name: "Backend",
    description: "Supabase providing database, authentication, and edge functions",
    icon: <Terminal className="h-4 w-4 text-dashboard-accent1" />
  },
  {
    name: "Build Tool",
    description: "Vite for fast development and optimized production builds",
    icon: <Package className="h-4 w-4 text-dashboard-accent1" />
  }
];

const projectStructure = [
  {
    path: "src/components",
    description: "React components organized by feature"
  },
  {
    path: "src/hooks",
    description: "Custom React hooks for shared logic"
  },
  {
    path: "src/pages",
    description: "Application routes and page components"
  },
  {
    path: "src/utils",
    description: "Utility functions and helpers"
  },
  {
    path: "supabase",
    description: "Supabase configuration and edge functions"
  }
];

const scripts = [
  {
    name: "dev",
    description: "Starts the development server with hot-reloading"
  },
  {
    name: "build",
    description: "Creates optimized production build"
  },
  {
    name: "lint",
    description: "Runs ESLint to check code quality"
  },
  {
    name: "preview",
    description: "Preview the production build locally"
  }
];

const testingInfo = [
  {
    title: "Test Environment",
    description: "Uses Jest with jsdom for browser simulation",
    icon: <Bug className="h-4 w-4 text-dashboard-accent1" />
  },
  {
    title: "Coverage",
    description: "Generates detailed code coverage reports",
    icon: <FileText className="h-4 w-4 text-dashboard-accent1" />
  },
  {
    title: "Test Files",
    description: "Supports .spec.ts, .test.ts, .spec.tsx, and .test.tsx files",
    icon: <FileCode className="h-4 w-4 text-dashboard-accent1" />
  }
];

export default UserManual;