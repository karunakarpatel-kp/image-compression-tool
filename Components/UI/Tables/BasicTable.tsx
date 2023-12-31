import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    fontSize: "1rem",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "1rem",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Karunakar Patel Score", 356, 16.0, 49, 3.9),
];

interface BasicTableProps {
  tableHeads: {
    id: number;
    title: string;
    align?: "left" | "right" | "center" | "justify";
  }[];
  tableData: {
    id: number;
    Data: (string | number | boolean)[];
    align?: "left" | "right" | "center" | "justify";
  }[];
}

const BasicTable = (props: BasicTableProps) => {
  const { tableHeads, tableData } = props;
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ mb: 2, borderBottom: "1px solid lightgrey", width: { xs: 400, sm: "100%", md: "100%", lg: "100%" } }}
    >
      <Table aria-label="customized table" size="small">
        <TableHead>
          <TableRow>
            {tableHeads.map(
              (singleTableHead: { id: number; title: string; align?: "left" | "right" | "center" | "justify" }) => {
                const { id, title, align } = singleTableHead;
                return (
                  <StyledTableCell align={align} key={id}>
                    {title}
                  </StyledTableCell>
                );
              }
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(
            (singleTableData: {
              id: number;
              Data: (string | number | boolean)[];
              align?: "left" | "right" | "center" | "justify";
            }) => {
              const { id, Data, align } = singleTableData;
              return (
                <StyledTableRow key={id}>
                  {Data.map((singleDataInArray: any, index) => {
                    return (
                      <StyledTableCell align={align ? align : "left"} key={index}>
                        {singleDataInArray}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;

{
  /* <BasicTable
            tableHeads={[
              { id: 0, align: "left", title: "First Header" },
              { id: 1, align: "center", title: "Second Header" },
              { id: 2, align: "center", title: "On-Road Price" },
              { id: 3, align: "center", title: "Mileage" },
              { id: 4, align: "center", title: "Fifth Header" },
            ]}
            tableData={[
              { id: 0, align: "center", Data: ["Frozen yoghurt", 159, 6.0, 24, 4.0] },
              { id: 1, align: "center", Data: ["Frozen yoghurt", 159, "karunakar Patel", "NA", 4.0] },
              {
                id: 2,
                align: "center",
                Data: ["Frozen yoghurt", 159, "karunakar Patel", "NA", "this is an e had ble body...!"],
              },
            ]}
          /> */
}
