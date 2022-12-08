import { Container } from "components/layout"
import { Heading } from "components/typography/Heading"
import {format} from 'date-fns'
import { Payment } from "types/Payment"
import {Button} from 'components/buttons'
import {Badge} from 'components/badges'

type GroupedPayments = {
  [key:string]: Payment[]
}

export const MobilePaymentTable = ({payments}: {payments: GroupedPayments}) => {
  return (
    <>
      <div className='w-full bg-mono-white'>
        <Container className='py-4'>
          <Heading size={2}>Transactions</Heading>
        </Container>

      </div>
      {Object.keys(payments).map(date => {
        const paymentsForDate = payments[date]
        return (
          <>
            <Container className='py-4'>
              <span className="text-sm font-bold uppercase">{format(new Date(date), 'MMM do, yyyy')}</span>
            </Container>
            <div className='w-full bg-mono-white'>
              <Container>
                <div className='flex flex-col'>
                  {paymentsForDate.map((payment, i) => {
                    const isRefund = payment.transaction_type === 'refund'
                    return (
                      <div className='border-b border-mono-300 py-2 flex justify-between'>
                        <div>
                          <Button className='font-normal' variant="link">{payment.billing_account.description}</Button>
                          <span className='block'>Boca FC</span>
                          <span className='text-mono-400 text-xs'># {payment.transaction_id}</span>
                        </div>
                        <div>
                          <span className='mb-2 block text-lg font-bold'>{isRefund && '-'}${Math.abs(payment.amount_cents/100).toFixed(2)}</span>
                          {isRefund ? (
                            <Badge variant='warning'>
                              Refund
                            </Badge>
                          ) : (
                            <Badge variant='success'>
                              Paid
                            </Badge>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Container>
            </div>
          </>
        )
      })}
    </>
  )
}