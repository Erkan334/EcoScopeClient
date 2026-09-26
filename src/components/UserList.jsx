import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { getAllUsers } from '../services/UserService';
import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
    

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  
    
    useEffect(() => {
      async function loadUsers() {
        try {
          const data = await getAllUsers();
          setUsers(data);
        } catch (error) {
          console.log("Error getting users:", error);
        }
      }
  
      loadUsers();
    }, []);



  function createData(id, name, email) {
    return { id, name, email};
  }

  // Search filter
  const filteredUsers = users.filter((user) =>
  user.name?.toLowerCase().includes(search.toLowerCase()) ||
  user.email.toLowerCase().includes(search.toLowerCase()) ||
  user.id.toString().includes(search));
  

  
  const columns = [
    { id: 'id', label: 'Id' },
    { id: 'name', label: 'Username'},
    { id: 'email', label: 'Email'}];
  


  const rows = 
      filteredUsers.map(user =>
          createData(user.id, user.name, user.email),
      );


    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TextField fullWidth type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search...">
      </TextField>
    
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          component={column.id === 'name' ? 'th' : 'td'}
                          scope={column.id === 'name' ? 'row' : undefined}
                          align={column.align}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        
      />
      
    </Paper>
  );
}