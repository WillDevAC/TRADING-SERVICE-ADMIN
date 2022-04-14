import tw from "tailwind-styled-components"

export const DashboardContainer = tw.div`
{/* Remove class [ h-64 ] when adding a card block */}

  container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6
`;

export const DashboardTitle = tw.div`
  block
`;

export const DashboardContent = tw.div`
  /* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
  
  w-full h-full rounded border-dashed border-2 border-gray-300
`;