import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class SimpleTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://protected-oasis-41147.herokuapp.com/')
    .then(response => response.json())
    .then(users =>{ this.setState({ users })})
  }

  onSearchChange = (text) => {
    this.setState({ searchField: text.target.value })
  }

  render() {
    const { classes } = this.props;
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !users.length ?
      <h1>Loading</h1>
      :
      (<div className="w-80 center">
        <Paper className={`${this.props.classes.root} pa4`}>
            <p className="f3 black ma1">Baza użytkowników, można użyć wyszukiwania poniżej</p>
            <TextField
                onChange={this.onSearchChange}
                id="standard-search"
                label="Nazwa użytkownika"
                type="search"
                className={classes.textField}
                margin="normal"
            />
            <Table className={this.props.classes.table}>
            <TableHead>
                <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Nazwa Użytkownika</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Użycia</TableCell>
                <TableCell align="right">Data dołączenia</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {filteredUsers.map(row => (
                <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                    {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.uses}</TableCell>
                    <TableCell align="right">{row.joined}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </Paper>
        </div>
      )
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
