import { useEffect, useState } from "react";
import { searchPolicies } from "../../api/PoliciesApi";
import SearchInput from "../../components/SearchInput/SearchInput";
import PoliciesTable from "./PoliciesTable";

function PoliciesPage() {
  const [rows, setRows] = useState([]);
  
  const search = async (search: string) => {
      const data = await searchPolicies(search);
      setRows(data);
    }

  useEffect(() => { 
    search("");
  }, []);

  return (
    <div data-testid="policies"  className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block sm:px-6 lg:px-8">
            <SearchInput onSearch={search} searchPlaceholder="Search Policies"/>
        </div>
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-lg shadow-sm">
            <PoliciesTable rows={rows}/>
            </div>
        </div>
        </div>
    </div>
    );
}

export default PoliciesPage;