export type DiscoveryDataType = {
  totalCount: number;
  appRows: {
    appId: string;
    appName: string;
    appSource: string[];
    category: string;
  }[];
};

export type DiscoveryRequestType = {
  appName?: string;
  category?: string;
  pageNumber: number;
  pageSize: number;
};
