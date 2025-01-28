'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight } from 'lucide-react'

const WelcomeArtifact = () => {
  const steps = [
    {
      title: "Get an Artifact",
      content: "Ask Claude to create a React component. For example: 'Create a simple counter component with increment and decrement buttons' or 'Make a temperature converter with Celsius and Fahrenheit'."
    },
    {
      title: "Replace This File",
      content: "Copy the entire artifact code (including imports) from Claude and replace the contents of src/app/page.tsx with it. The environment is already set up with all necessary dependencies."
    },
    {
      title: "Extend Your App",
      content: "This boilerplate includes everything you need to build a full application: TypeScript, Tailwind CSS, shadcn/ui components, and more. Check the README for details about available features and customization."
    }
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <ChevronRight className="w-6 h-6 text-primary" />
            <div>
              <CardTitle className="text-2xl">Welcome to Artifact Boilerplate</CardTitle>
              <CardDescription>
                A development environment for Claude&apos;s React artifacts
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              This is a sample artifact showing some of the components and styling available.
              Replace this page with your own artifact from Claude!
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              {steps.map((step, index) => (
                <AccordionItem key={index} value={`step-${index}`}>
                  <AccordionTrigger>
                    <span className="font-medium">
                      Step {index + 1}: {step.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {step.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Available Features</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>All shadcn/ui components pre-installed</li>
                <li>Lucide React icons (version 0.263.1)</li>
                <li>ReCharts for data visualization</li>
                <li>Utilities: Lodash, Math.js</li>
                <li>Data handling: PapaParse (CSV), SheetJS (Excel)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default WelcomeArtifact