import FormLogin from "@/components/Forms/FormLogin";

export default function Home() {
    return (
        <>
            <main className="flex justify-center items-center gap-32 h-[85vh]">
                <div className="bg-indigo-300 w-1/4 h-2/3 flex justify-center items-center rounded">
                    <h1>GLB 3D</h1>
                </div>
                <FormLogin />
            </main>
        </>
    );
}
