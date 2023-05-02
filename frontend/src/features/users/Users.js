import React, { useMemo } from 'react';
import './Users.scss';
import Table from '../../components/table/Table';
import Box from '../../components/box/Box';
import BoxContent from '../../components/box/content/BoxContent';

const Users = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'Firstname'
      }
    ],
    []
  );

  const data = [
    {
      firstName: 'tanner'
    },
    {
      firstName: 'tanner2'
    },
    {
      firstName: 'tanner3'
    }
  ];

  return (
    <>
      <div className="title">Utilisateurs</div>
      <Box>
        <BoxContent>
          <Table columns={columns} data={data} />
        </BoxContent>
      </Box>
    </>
  );
};

export default Users;
