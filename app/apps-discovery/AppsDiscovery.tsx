import { Paper } from "@mui/material";
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

import { useSearchParams } from "react-router";
import { useApps } from "~/hooks/useApps";

const columns: GridColDef[] = [
  { field: 'appName', headerName: 'Name', flex: 1 },
  { field: 'category', headerName: 'Category', flex: 1 },
  {
    field: 'sourceName',
    headerName: 'Connection',
    type: 'string',
    flex: 1,
  },
];


export const AppsDiscovery = () => {
  const searchParams = useSearchParams();
  const pageNumber = searchParams[0].get('pageNumber') || 0;
  const pageSize = searchParams[0].get('pageSize') || 50;
  const appName = searchParams[0].get('appName') || undefined;
  const category = searchParams[0].get('category') || undefined;

  const { data, isLoading, isFetching } = useApps({ pageNumber: Number(pageNumber), pageSize: Number(pageSize), appName, category });
  
  if (isLoading || isFetching) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;
  
  return (
    <Paper>
      <DataGrid
        loading={isLoading || isFetching}
        rows={data.appRows}
        getRowId={(row) => row.appId}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: Number(pageNumber), pageSize: Number(pageSize) }, 
          }
        }}
        rowCount={data.totalCount}
        pageSizeOptions={[50]}
        onPaginationModelChange={(model) => {
          searchParams[1](new URLSearchParams({
            pageNumber: model.page.toString(),
            pageSize: model.pageSize.toString(),
          }));
        }}
        sx={{
          border: 0,
        }}
      />
    </Paper>
  );
};
