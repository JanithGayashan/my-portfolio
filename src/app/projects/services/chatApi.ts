export interface ChatRequest {
  thread_id: string;
  message: string;
}

export interface ChatResponse {
  reply: string;
  action: 'NAVIGATE' | 'NONE';
  target: string;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const sendChatMessage = async (payload: ChatRequest): Promise<ChatResponse> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/chat/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || 'Failed to communicate with the AI engine.');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};