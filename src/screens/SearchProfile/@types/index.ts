interface filteredUser {
  id: number;
  name: string;
  photo: string;
}

export interface ISearchProfile {
  searchHistory: string[];
  handleDeleteAll: () => void;
  filteredUsers: filteredUser[];
  handleDeleteSearch: (searchToDelete: string) => void;
}
