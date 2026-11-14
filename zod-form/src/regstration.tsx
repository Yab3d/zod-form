import { useForm } from "@tanstack/react-form";

export function SpeakerForm(){
    const form = useForm({
        defaultValues:{
            firstName:'',
            lastName:'',
            twitterHandel:'',
        },
        onSubmit:async({value})=>{
            console.log("form submitted",value);
        }
    })


return(
   <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 max-w-md mx-auto text-white">
      <h2 className="text-xl font-bold mb-6">Add New Speaker</h2>
      {/* We will build the fields here */}
    </div>
);

}