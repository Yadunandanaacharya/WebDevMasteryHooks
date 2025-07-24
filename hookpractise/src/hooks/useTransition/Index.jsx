import { useState, useTransition } from "react";

const Index = () => {
    const [search, setSearch] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleSearch = (e) => {
        // setSearch(e.target.value)
        startTransition(()=> setSearch(e.target.value));
        console.log(search);
    }

    return (
        <div >
            <h1>This is usetransition hook</h1>
            <input type="text" value={search} onChange={handleSearch}></input>
        </div>
    );
}

export default Index;