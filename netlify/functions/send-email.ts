// import type { Handler } from "@netlify/functions";
// import nodemailer from "nodemailer";

// export const handler: Handler = async (event) => {
//     if (event.httpMethod !== "POST") {
//         return { statusCode: 405, body: "Method Not Allowed" };
//     }

//     const data = JSON.parse(event.body || "{}");

//     const transporter = nodemailer.createTransport({
//         host: "smtp.hostinger.com",
//         port: 465,
//         secure: true,
//         auth: {
//             user: process.env.MAIL_USER!,
//             pass: process.env.MAIL_PASS!,
//         },
//     });

//     const html = `
//   <table width="100%" cellpadding="0" cellspacing="0" style="background:#0b0b0b;padding:40px 0;">
//     <tr>
//       <td>
//         <table cellpadding="0" cellspacing="0" align="center" width="600" 
//                style="background:#111;border-radius:14px;overflow:hidden;
//                       border:1px solid #222;color:#fff;font-family:Arial,Helvetica,sans-serif;">
          
//           <tr>
//             <td style="padding:30px;border-bottom:1px solid #222;">
//               <h1 style="margin:0;font-size:26px;font-weight:700;color:#ff6b00;font-family:Georgia,serif;">
//                 New Strategic Engagement Request
//               </h1>
//               <p style="margin-top:8px;color:#aaa;font-size:13px;">
//                 A new qualification conversation request has been submitted.
//               </p>
//             </td>
//           </tr>

//           <tr>
//             <td style="padding:30px;">
//               <table width="100%" cellpadding="0" cellspacing="0">

//                 <tr>
//                   <td style="padding:12px 0;color:#aaa;font-size:12px;letter-spacing:1px;text-transform:uppercase;">
//                     Name
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding-bottom:16px;font-size:16px;">
//                     ${data.name}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="padding:12px 0;color:#aaa;font-size:12px;letter-spacing:1px;text-transform:uppercase;">
//                     Email
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding-bottom:16px;font-size:16px;">
//                     ${data.email}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="padding:12px 0;color:#aaa;font-size:12px;letter-spacing:1px;text-transform:uppercase;">
//                     Company
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding-bottom:16px;font-size:16px;">
//                     ${data.company}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="padding:12px 0;color:#aaa;font-size:12px;letter-spacing:1px;text-transform:uppercase;">
//                     Strategic Intent
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding-bottom:16px;font-size:16px;">
//                     ${data.intent}
//                   </td>
//                 </tr>

//                 ${
//                     data.complexity
//                         ? `
//                 <tr>
//                   <td style="padding:12px 0;color:#aaa;font-size:12px;letter-spacing:1px;text-transform:uppercase;">
//                     Project Complexity
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding-bottom:16px;font-size:16px;">
//                     ${data.complexity}
//                   </td>
//                 </tr>
//                 `
//                         : ""
//                 }

//                 <tr>
//                   <td style="padding:12px 0;color:#aaa;font-size:12px;letter-spacing:1px;text-transform:uppercase;">
//                     Engagement Type
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding-bottom:5px;font-size:18px;font-weight:700;color:#ff6b00;">
//                     ${data.ctaType}
//                   </td>
//                 </tr>

//               </table>
//             </td>
//           </tr>

//           <tr>
//             <td style="padding:24px;border-top:1px solid #222;text-align:center;color:#777;font-size:12px;">
//               This is not a sales call. This is a qualification conversation.
//             </td>
//           </tr>

//         </table>
//       </td>
//     </tr>
//   </table>
//   `;

//     await transporter.sendMail({
//         from: `"Website Lead" <${process.env.MAIL_USER}>`,
//         to: "youremail@yourdomain.com", // <-- your admin email
//         cc: data.email, // <-- CC to user
//         subject: `New Engage Form Submission — ${data.name}`,
//         html,
//     });

//     return {
//         statusCode: 200,
//         body: JSON.stringify({ success: true }),
//     };
// };
