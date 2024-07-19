// @ts-ignore
import React, { useOptimistic } from "react";

import { Button } from "@/sc/ui/button";

import { useFetchUsers } from "../hooks/use-fetch-users";

const SearchTable = () => {
  const { data, isLoading, isError } = useFetchUsers();
  const [optimisticData, setOptimisticData] = useOptimistic(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  const handleOptimisticUpdate = (id: number) => {
    setOptimisticData((prevData: any) =>
      prevData?.map((user: any) =>
        user.id === id ? { ...user, name: "Updated Name" } : user
      )
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {optimisticData?.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Button onClick={() => handleOptimisticUpdate(user.id)}>
                  Update Optimistically
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTable;
