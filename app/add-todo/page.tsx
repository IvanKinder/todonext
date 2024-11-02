"use client";
import { useState } from "react";

const Page: React.FC = () => {
    const [text, setText] = useState('11');
  
    console.log(text)
    
    return (
      <div>
        Form
      </div>
    );
  }
  
  export default Page;