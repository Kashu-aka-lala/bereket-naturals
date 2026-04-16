<?php
header('Content-Type: application/json');

// Recipient Board of Honors List
$recipients = [
    'md@bereketfoods.com',
    'm.aitisam@bereketfoods.com',
    'usama.khan@bereketfoods.com'
];

// Check request method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Get and Sanitize Data
    $full_name = strip_tags(trim($_POST["full_name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);
    $honeypot = trim($_POST["honeypot"]);

    // 2. Validation
    if (!empty($honeypot)) {
        // Spam detected
        echo json_encode(["success" => false, "message" => "Spam detected."]);
        exit;
    }

    if (empty($full_name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Please fill all required fields correctly."]);
        exit;
    }

    if (empty($subject)) {
        $subject = "New Inquiry from Bereket Website";
    }

    // 3. Prepare Email
    $to = implode(",", $recipients);
    
    $email_content = "Name: $full_name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // 4. Headers
    $headers = "From: $full_name <noreply@bereketfoods.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 5. Send Email
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send email. Server error."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>
