"use server";

const API_URL = process.env.REPLYBASE_API_URL || "https://app.replybase.co.uk";
const API_SECRET = process.env.REPLYBASE_API_SECRET;

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}

/**
 * Subscribe an email to the ReplyBase newsletter
 */
export async function subscribeToNewsletter(
  email: string,
): Promise<ApiResponse<{ email: string; unsubscribeUrl: string }>> {
  try {
    const response = await fetch(`${API_URL}/api/newsletter/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_SECRET}`,
      },
      body: JSON.stringify({ email }),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || "Failed to subscribe to newsletter",
      };
    }

    return {
      success: true,
      message: data.message,
      data: {
        email: data.email,
        unsubscribeUrl: data.unsubscribeUrl,
      },
    };
  } catch (error) {
    console.error("[Newsletter Subscribe] Error:", error);
    return {
      success: false,
      error: "Network error. Please try again later.",
    };
  }
}

/**
 * Unsubscribe an email from the ReplyBase newsletter
 */
export async function unsubscribeFromNewsletter(
  email: string,
): Promise<ApiResponse<{ email: string }>> {
  try {
    const response = await fetch(`${API_URL}/api/newsletter/unsubscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_SECRET}`,
      },
      body: JSON.stringify({ email }),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || "Failed to unsubscribe",
      };
    }

    return {
      success: true,
      message: data.message,
      data: { email: data.email },
    };
  } catch (error) {
    console.error("[Newsletter Unsubscribe] Error:", error);
    return {
      success: false,
      error: "Network error. Please try again later.",
    };
  }
}

/**
 * Submit a data deletion request (GDPR)
 */
export async function requestDataDeletion(
  email: string,
): Promise<ApiResponse<{ confirmationCode: string; statusUrl: string }>> {
  try {
    const response = await fetch(`${API_URL}/api/data-deletion/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_SECRET}`,
      },
      body: JSON.stringify({ email }),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || "Failed to submit deletion request",
      };
    }

    return {
      success: true,
      message: data.message,
      data: {
        confirmationCode: data.confirmationCode,
        statusUrl: data.statusUrl,
      },
    };
  } catch (error) {
    console.error("[Data Deletion] Error:", error);
    return {
      success: false,
      error: "Network error. Please try again later.",
    };
  }
}
