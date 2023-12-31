// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';

// // interface IndeterminateCheckboxProps {}

// export default function Checkbox1() {
//   const [checked, setChecked] = React.useState<[boolean, boolean]>([false, false]);

//   const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // setChecked([event.target.checked, event.target.checked]);
//   };

//   const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked([event.target.checked, checked[1]]);
//   };

//   const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked([checked[0], event.target.checked]);
//   };

//   const children = (
//     <Box sx={{ display: 'flex', flexDirection: 'column', ml: 15 ,}}>
//       <FormControlLabel
//         label="support"
//         control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
//       />
//       <FormControlLabel
//         label="customer_success"
//         control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
//       />
//     </Box>
//   );

//   return (
//     <div>
//       <FormControlLabel sx={{ml:12}}
//         label="Customer Service"
//         control={
//           <Checkbox
//             checked={checked[0] && checked[1]}
//             indeterminate={checked[0] !== checked[1]}
//             onChange={handleChange1}
//           />
//         }
//       />
//       {children}
//     </div>
//   );
// }



import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState<[boolean, boolean]>([false, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Support"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Customer Success"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Customer Service"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
}
