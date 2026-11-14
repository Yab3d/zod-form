import { useForm } from "@tanstack/react-form";

export function SpeakerForm(){
      console.log("Rendering SpeakerForm");
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
      
     <form
  onSubmit={(e) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  }}
  className="space-y-4"
>
  <form.Field name="firstName">
    {(field) => {
      // PROOF: This log will only fire when firstName changes!
      console.log("Rendering First Name Field");
      
      return (
        <div className="flex flex-col gap-2">
          <label htmlFor={field.name} className="text-sm text-neutral-300">
            First Name
          </label>
          <input
            id={field.name}
            name={field.name}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            className="p-2 rounded-md bg-neutral-950 border border-neutral-700 focus:border-emerald-500 outline-none"
          />
        </div>
      );
    }}
  </form.Field>
  
  <button type="submit" className="w-full mt-4 bg-emerald-600 py-2 rounded-md font-bold">
    Save Speaker
  </button>
</form>
    </div>
);

}