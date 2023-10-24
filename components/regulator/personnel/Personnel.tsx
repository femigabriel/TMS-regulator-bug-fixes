import React, { useState } from "react";
import { Button } from "antd";
import { PersonnelInfomation } from "./PersonnelInfomation";
// import { PersonnelModal } from "./PersonnelModal";
import { PersonelProps } from "@/types/global";

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState<PersonelProps[]>([]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex: number) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (index: React.SetStateAction<null>) => {
    setRowToEdit(index);

    setModalOpen(true);
  };

  const handleSubmit = (newRow: PersonelProps) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };
  return (
    <div>
      <div className="bg-white py-5">
        <div className="flex justify-between lg:px-10 pt-5 addBtn">
          <div></div>
        </div>
        <PersonnelInfomation
          rows={rows}
          deleteRow={handleDeleteRow}
          editRow={handleEditRow}
        />
      </div>

      {/* {modalOpen && (
        <PersonnelModal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )} */}
      <Button
        onClick={() => setModalOpen(true)}
        className="btn px-5 bg-slate-950 rounded-md text-white h-[35px]"
      >
        Create
      </Button>
    </div>
  );
};
