/* global fetch */
/* eslint no-param-reassign:
 ["error", { "props": true, "ignorePropertyModificationsFor": ["item"] }] */

import React from 'react';
import SearchInput from 'react-search-input';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DataTables from 'material-ui-datatables';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { ListItem } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import myConfig from '../config';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});


const styles = {
  container: {
    textAlign: 'center',
  },
  component: {
    margin: '60px 20px',
  },
  titleStyle: {
    fontSize: 16,
    color: deepOrange500,
  },
  footerToolbarStyle: {
    padding: '0 100px',
  },
  tableStyle: {
    tableLayout: 'auto',
  },
  tableBodyStyle: {
    overflowX: 'auto',
  },
  tableWrapperStyle: {
    padding: 5,
  },
};


// const TABLE_COLUMNS = [
//  {
//    key: 'name',
//    label: 'Agent',
//    sortable: true,
//    tooltip: 'Agent',
//    className: 'important-column',
//    render: (name,all) => <a target='_blank' href={all.agent_link} >{name}</a>
//  }, {
//    key: 'accessLevel',
//    label: 'Access Level',
//    render:(accessLevel,all) =>
// <DropDownMenu value={accessLevel}
// onChange={this.handleChangeAccessLevel} >
//        <MenuItem value="Agent Forwarder" primaryText="Agent Forwarder" />
//        <MenuItem value="Full Access" primaryText="Full Access" />
//        <MenuItem value="Supplier" primaryText="Supplier" />
//
//      </DropDownMenu>
//
//  }, {
//    key: 'perLevel',
//    label: 'Preference Level',
//  }
// ];


export default class networkDetails extends React.Component {

  constructor(props) {
    super(props);

    this.tableProps = {
      endItemsRowCount: 10,
      rowSize: 10,
      page: 1,
    };


    this.state = {
      order: 'asc',
      orderBy: 'name',

      itemsFilterList: [
                {id : 1, name:"ADMIN", email:"admin@gmail.com",userAccess: 'admin'},
                {id : 2, name:"Test 1", email:"test1@gmail.com",userAccess: 'simple'},
                {id : 3, name:"Test 22", email:"test22@gmail.com",userAccess: 'simple'},
                {id : 4, name:"Test 4", email:"test4@gmail.com",userAccess: 'simple'},
                {id : 5, name:"Test 7", email:"test7@gmail.com",userAccess: 'simple'},
                {id : 6, name:"Test 8", email:"Test8@gmail.com",userAccess: 'simple'},
                {id : 7, name:"Simple User", email:"simpleuser@gmail.com",userAccess: 'simple'},


            ],
      anchorEl: undefined,
      value: 'Agent Forwarder',
      open: false,
      selectedIndex: 1,
      items:[
                {id : 1, name:"ADMIN", email:"admin@gmail.com",userAccess: 'admin'},
                {id : 2, name:"Test 1", email:"test1@gmail.com",userAccess: 'simple'},
                {id : 3, name:"Test 22", email:"test22@gmail.com",userAccess: 'simple'},
                {id : 4, name:"Test 4", email:"test4@gmail.com",userAccess: 'simple'},
                {id : 5, name:"Test 7", email:"test7@gmail.com",userAccess: 'simple'},
                {id : 6, name:"Test 8", email:"Test8@gmail.com",userAccess: 'simple'},


            ]
    };
    let startSliceArr=0;
    let endSliceArr=10;
    this.setState({ items: this.state.items.slice(startSliceArr, endSliceArr), page: 1 });
    this.TABLE_COLUMNS = [
        {
         key: 'id',
         label: 'ID',
         sortable: true,
         style: {
           width: '35%',

         },
         className: 'important-column',
         render: (name, all) => <a style={{ textDecoration: 'none' }} href='' >{name}</a>,
       },
       {
         key: 'name',
         label: 'Full Name',
         style: {
           width: '35%',

         },
         className: 'important-column',
         render: (name, all) => <a style={{ textDecoration: 'none' }} href='' >{name}</a>,
       },{
         key: 'email',
         label: 'Email',
         style: {
           width: '35%',

         },
         className: 'important-column',
         render: (name, all) => <a style={{ textDecoration: 'none' }} href='' >{name}</a>,
       }, {
         key: 'userAccess',
         label: 'User Access',
         style: {
           width: '20%',
         },

         render: (userAccess, all) => (
           <DropDownMenu value={userAccess} onChange={this.handleChangeAccessLevel} >
             <MenuItem value='admin' primaryText="Admin User" />
             <MenuItem value='simple' primaryText="Simple User" />

           </DropDownMenu>),

       }
     ]

     this.userList = [{id : 1, name:"ADMIN", email:"admin@gmail.com",userAccess: 'admin'}]


    this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
    this.handleFilterValueChange = this.handleFilterValueChange.bind(this);
        // this.handleCellClick = this.handleCellClick.bind(this);
    this.handleRowSizeChange = this.handleRowSizeChange.bind(this);
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);


  }



  handleRowSizeChange(rowsize) {

  }

   // handleCellClick(rowIndex, columnIndex, row, column) {
   //   console.log('rowIndex: ' + rowIndex + ' columnIndex: ' + columnIndex);
   // }

  handleNextPageClick() {

  }

  handlePreviousPageClick() {

  }

  handleSortOrderChange(key, order) {
    const orderBy = key;
    if (order === 'asc') {
      const itemList = this.state.itemsFilterList.sort(
                (a, b) => (a[orderBy] > b[orderBy] ? 1 : -1),
            );
      this.setState({ items: itemList.slice(0, this.tableProps.rowSize),
        itemsFilterList: itemList });
    } else {
      const itemList = this.state.itemsFilterList.sort(
                (a, b) => (a[orderBy] > b[orderBy] ? -1 : 1),
            );
      this.setState({ items: itemList.slice(0, this.tableProps.rowSize),
        itemsFilterList: itemList });
    }
  }


  handleFilterValueChange(value) {

  }


  render() {
    return (


      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.component}>

          <Card style={{ margin: 12 }}>

            <DataTables
              title={'User Details'}
              height={'auto'}
              selectable
              showRowHover

              columns={this.TABLE_COLUMNS}
              data={this.state.items}
              filterHintText={'Search'}
              showCheckboxes={false}
              showHeaderToolbar={true}
              onCellClick={this.handleCellClick}
              onCellDoubleClick={this.handleCellDoubleClick}
              onFilterValueChange={this.handleFilterValueChange}
              onSortOrderChange={this.handleSortOrderChange}
              onNextPageClick={this.handleNextPageClick}
              onPreviousPageClick={this.handlePreviousPageClick}
              onRowSizeChange={this.handleRowSizeChange}
              count={this.state.count}
              rowSize={this.tableProps.rowSize}
              page={this.tableProps.page}
            />
          </Card>

        </div>

      </MuiThemeProvider>


    );
  }


}

