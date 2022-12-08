export type BillingAccount = {
  description: string
}

export type Payment = {
  amount_cents: number
  amount_currency: "USD"
  billing_account: BillingAccount
  data_account: string
  data_exp_month: string
  data_exp_year: string
  data_method: string
  data_type: string
  id: number
  payment_type: 'refund' | 'payment'
  settled_at: string
  transaction_id: number
  transaction_type: string
}