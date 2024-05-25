import React, { useState } from "react";
import { Input, Textarea, Link } from "@nextui-org/react";
import axios from "axios";
import useToken from "@/hooks/useToken"; // Adjust the import path as necessary

const CreateProject: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { userId } = useToken(); // Get userId using the useToken hook

  const handleCreateProject = async () => {
    try {
      // Log the title, description, and userId for debugging
      console.log("Title:", title);
      console.log("Description:", description);
      console.log("User ID:", userId);
  
      // Make a POST request to create a new project
      const response = await axios.post("http://127.0.0.1:5000/create_project", {
        title: title,
        description: description,
        user_id: userId, // Use the userId from the useToken hook
      });
  
      // Log the response for debugging
      console.log(response.data);
  
      // Handle success (e.g., show a success message to the user)
    } catch (error) {
      // Log the error for debugging
      console.error("Error creating project:", error);
  
      // Handle error (e.g., show an error message to the user)
    }
  };
  


  return (
    <div className="VStack gap-5 w-full h-full">
      <p className="font-medium text-xl">Create New Project</p>
      <form className="VStack gap-5">
        <Input
          type="text"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          label="Description"
          placeholder="Enter your description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
       
        <div className="HStack justify-between">
          <Link href="#" className="text-sm">
            Cancel
          </Link>
          <button
            type="button"
            className="bg-night pt-2 pb-2 pl-4 pr-4 rounded-lg text-sm text-white"
            onClick={handleCreateProject}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
