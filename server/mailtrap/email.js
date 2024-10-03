import { 
    generatePasswordResetEmailHtml, 
    generateResetSuccessEmailHtml, 
    generateWelcomeEmailHtml, 
    htmlContent 
} from "./htmlEmail.js";
import { client, sender } from "./mailtrap.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipients = [{ email }];

    try {
        const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Verify your email",
            html: htmlContent.replace("{verificationToken}", verificationToken),
            category: "Email Verification",
        });
        console.log(res);
    } catch (error) {
        throw new Error("Failed to send email verification");
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipients = [{ email }];
    const htmlContent = generateWelcomeEmailHtml(name);

    try {
        const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Welcome to khamu.com",
            html: htmlContent,
            template_variables: {
                company_info_name: "khamu.com",
                name: name
            }
        });
        console.log(res);
    } catch (error) {
        throw new Error("Failed to send welcome email.");
    }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipients = [{ email }];
    const htmlContent = generatePasswordResetEmailHtml(resetURL);

    try {
        const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Reset your password",
            html: htmlContent,
            category: "Reset Password"
        });
        console.log(res);
    } catch (error) {
        throw new Error("Failed to reset password.");
    }
};

export const sendResetSuccessEmail = async (email) => {
    const recipients = [{ email }];
    const htmlContent = generateResetSuccessEmailHtml();

    try {
        const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Password Reset successfully",
            html: htmlContent,
            category: "Password Reset."
        });
        console.log(res);
    } catch (error) {
        throw new Error("Failed to send password reset success email.");
    }
};
