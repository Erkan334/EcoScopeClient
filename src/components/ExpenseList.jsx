import { useEffect, useMemo, useState } from "react";
import { getAllExpenses, removeExpense } from "../services/ExpenseService";
import RemoveExpenseModal from "./RemoveExpenseModal";
import UpdateExpenseModal from "./UpdateExpenseModal";

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";

import CreateExpenseModal from "../components/CreateExpenseModal";


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}



//Table Columns
const headCells = [
  {
    id: "title",
    numeric: false,
    label: "Title",
  },
  {
    id: "costAmount",
    numeric: true,
    label: "Cost",
  },
  {
    id: "billingFrequency",
    numeric: false,
    label: "Billing Frequency",
  },
  {
    id: "categoryTitle",
    numeric: false,
    label: "Category",
  },
];




function ExpenseTableHead({ order, orderBy, onRequestSort, onCreate }) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={
              orderBy === headCell.id ? order : false
            }
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={
                orderBy === headCell.id ? order : "asc"
              }
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}


        <TableCell align="right">
          <CreateExpenseModal onCreate={onCreate}/>
        </TableCell>

      </TableRow>
    </TableHead>
  );
}




export function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("title");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);




  useEffect(() => {
    async function loadExpenses() {
      try {
        const data = await getAllExpenses();
        setExpenses(data);
      } catch (error) {
        console.log("Error getting expenses:", error);
      }
    }

    loadExpenses();
  }, []);




  function getBillingFrequency(frequency) {
    switch (frequency) {
      case 0:
        return "One-time";

      case 1:
        return "Weekly";

      case 2:
        return "Monthly";

      case 3:
        return "Yearly";

      default:
        return "Unknown";
    }
  }



  //Sort Table
  function handleRequestSort(event, property) {
    const isAsc =
      orderBy === property && order === "asc";

    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  }


  async function refreshExpenseList() {
    try {
        const data = await getAllExpenses();
        setExpenses(data);
    } catch (error) {
        console.log("Error getting expenses:", error);
    }
  }

  async function handleRemove(expenseId) {
    try {
      await removeExpense(expenseId);

      setExpenses((currentExpenses) =>
        currentExpenses.filter(
          (expense) => expense.id !== expenseId
        )
      );
    } catch (error) {
      console.error("Error removing expense:", error);
    }
  }


  //Change Table-Page
  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(
      parseInt(event.target.value, 10)
    );

    setPage(0);
  }


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - expenses.length) : 0;


  const visibleExpenses = useMemo(
    () =>
      [...expenses]
        .sort(getComparator(order, orderBy))
        .slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        ),
    [expenses, order, orderBy, page, rowsPerPage]
  );


  return (
    <Box className="w-full max-w-4xl mx-auto mt-8">

      <h2 className="text-2xl font-semibold mb-4 text-center text-white">
        My Expenses
      </h2>

      <Paper sx={{ width: "100%" }}>

        <TableContainer>

          <Table>

            <ExpenseTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              onCreate={refreshExpenseList}
            />

            <TableBody>

              {visibleExpenses.map((expense) => (

                <TableRow key={expense.id}>

                  <TableCell>
                    {expense.title}
                  </TableCell>

                  <TableCell align="right">
                    {expense.costAmount} kr
                  </TableCell>

                  <TableCell>
                    {getBillingFrequency(
                      expense.billingFrequency
                    )}
                  </TableCell>

                  <TableCell>
                    {expense.categoryTitle}
                  </TableCell>

                  {/* <TableCell align="right" className="border border-solid">
                    <UpdateExpenseModal/>
                  </TableCell> */}

                  <TableCell align="right">
                    <Box className="flex flex-row justify-end">
                      <UpdateExpenseModal
                        expense={expense}
                        expenseId={expense.id}
                        onUpdate={refreshExpenseList}/>

                      <RemoveExpenseModal
                        expenseId={expense.id}
                        expenseTitle={expense.title}
                        onRemove={handleRemove}/>
                      </Box>
                  </TableCell>

                </TableRow>

              ))}

              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={5} />
                </TableRow>
              )}

            </TableBody>

          </Table>

        </TableContainer>


        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={expenses.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

      </Paper>

    </Box>
  );
}