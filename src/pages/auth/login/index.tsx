// import React from "react";

// import {
//   Auth_Container,
//   Auth_Container_Wrapper,
//   Auth_Form_Wrapper,
//   Form_Action,
//   Form_Label,
//   Form_Input,
//   Logo,
//   Logo_Wrapper,
//   Button_Form,
// } from "../../../components/templates/pages/Auth";

// import Router from "next/router";

// const PageAuth: React.FC = () => {
//   const HandleSubmitForm = () => {
//     Router.push("painel/consultor");
//   };

//   return (
//     <Auth_Container>
//       <Auth_Container_Wrapper>
//         <Logo_Wrapper>
//           <Logo src="img/logo.png" alt="Logo Trading Service" />
//         </Logo_Wrapper>
//         <Auth_Form_Wrapper>
//           <Form_Action>
//             <div className="mt-6">
//               <Form_Label>E-mail</Form_Label>
//               <Form_Input type="text" name="email" required />
//             </div>
//             <div className="mt-6">
//               <Form_Label>Senha</Form_Label>
//               <Form_Input type="password" name="password" required />
//             </div>

//             <div className="mt-6">
//               <Button_Form onClick={HandleSubmitForm}>Entrar</Button_Form>
//             </div>
//           </Form_Action>
//         </Auth_Form_Wrapper>
//       </Auth_Container_Wrapper>
//     </Auth_Container>
//   );
// };

// export default PageAuth;
