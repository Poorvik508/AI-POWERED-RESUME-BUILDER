import React from 'react'
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import MinimalImageTemplate from "./templates/MinimalImageTemplate";

const ResumePreview = ({data,template,accentColor,classes=''}) => {
    const renderTemplate = () => {
        switch (template) {
            case "modern":
                return <ModernTemplate data={ data}  accentColor={accentColor} />
                break;
            case "modern":
                return (
                  <ClassicTemplate data={data} accentColor={accentColor} />
                );
                break;
            case "modern":
                return (
                  <MinimalTemplate data={data} accentColor={accentColor} />
                );
                break;
            case "modern":
                return (
                  <MinimalImageTemplate data={data} accentColor={accentColor} />
                );
                break;
        
            default:
                break;
        }
    }
  return (
      <div className="w-full bg-gray-100">
          <div id="resume-preview" className={"border border-gray-200 print:shadow-none print:border-none"+classes}>
              
          </div>
      
    </div>
  )
}

export default ResumePreview
