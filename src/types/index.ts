export interface User {
  id: string
  email: string
  name: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Partner {
  id: string
  user_id: string
  partner_id: string
  status: 'pending' | 'accepted' | 'rejected'
  created_at: string
  updated_at: string
}

export interface Discussion {
  id: string
  title: string
  description: string
  user_id: string
  partner_id?: string
  status: 'pending' | 'in_progress' | 'resolved'
  created_at: string
  updated_at: string
}

export interface Message {
  id: string
  discussion_id: string
  user_id: string
  content: string
  created_at: string
  updated_at: string
}

export interface Agreement {
  id: string
  title: string
  content: string
  user_id: string
  partner_id?: string
  discussion_id?: string
  status: 'pending' | 'accepted' | 'rejected'
  created_at: string
  updated_at: string
}

export interface Subscription {
  id: string
  user_id: string
  stripe_customer_id: string
  stripe_subscription_id: string
  plan: 'free' | 'essential' | 'premium'
  status: 'active' | 'canceled' | 'past_due'
  current_period_end: string
  created_at: string
  updated_at: string
}

export interface AISuggestion {
  id: number
  title: string
  description: string
  tips: string[]
}
