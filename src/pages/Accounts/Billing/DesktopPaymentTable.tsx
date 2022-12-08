import { Container } from 'components/layout'
import { Heading } from 'components/typography/Heading'
import { format } from 'date-fns'
import { Payment } from 'types/Payment'
import { Button } from 'components/buttons'
import { Badge } from 'components/badges'
import {DocumentDuplicateIcon, CreditCardIcon} from '@heroicons/react/24/outline'

type GroupedPayments = {
  [key: string]: Payment[]
}

const PaymentIcon = ({type}: {type: string}) => {
  return <CreditCardIcon className='h-6' />
}

export const DesktopPaymentTable = ({
  payments,
}: {
  payments: GroupedPayments
}) => {
  return (
    <Container>
      <div className="w-full bg-mono-white rounded-tl-lg rounded-tr-lg p-[2.5rem]">
        <Heading size={2}>Transactions</Heading>
        <div className="flex justify-between text-mono-500 uppercase text-sm mt-8">
          <span className='block w-1/4'>Description</span>
          <span className='block w-[18.75%]'>Type</span>
          <span className='block w-[18.75%]'>Method</span>
          <span className='block w-[18.75%]'>Status</span>
          <span className='block w-[18.75%]'>Amount</span>
        </div>
      </div>
      <div className="w-full bg-mono-white rounded-bl-lg rounded-br-lg pb-12">
        {Object.keys(payments).map((date) => {
          const paymentsForDate = payments[date]
          return (
            <>
              <div className="py-4 w-full px-[2.5rem] bg-mono-200">
                <span className="text-sm font-bold uppercase">
                  {format(new Date(date), 'MMM do, yyyy')}
                </span>
              </div>
              <div className="w-full bg-mono-white">
                <div className="flex flex-col">
                  {paymentsForDate.map((payment, i) => {
                    const isRefund = payment.transaction_type === 'refund'
                    return (
                      <div className="text-lg border-b border-mono-300 py-3 px-[2.5rem] flex justify-between">
                        <div className='w-1/4'>
                          <Button className="font-normal" variant="link">
                            {payment.billing_account.description}
                          </Button>
                          <span className="block">Boca FC</span>
                          <span className="text-mono-400 ">
                            # {payment.transaction_id}
                          </span>
                        </div>
                        <div className='w-[18.75%]'>
                          <DocumentDuplicateIcon className='h-6 text-mono-500 cursor-pointer' onClick={() => alert('slide out drawer')} />
                        </div>
                        <div className='w-[18.75%]'>
                          <div className='flex'>
                            <PaymentIcon type={payment.transaction_type} />
                            <span className='ml-2'>***{payment.data_account}</span>
                          </div>
                          <Button className='font-normal' variant="link">
                            ID # {payment.transaction_id}
                          </Button>
                        </div>
                        <div className='w-[18.75%]'>
                          {payment.transaction_type === 'refund' && <Badge variant='warning'>Refund</Badge>}
                          {payment.transaction_type === 'sale' && <Badge variant='success'>Paid</Badge>}
                        </div>
                        <div className='w-[18.75%] flex flex-col items-start'>
                          <span className="mb-2 block text-lg font-bold">
                            {isRefund && '-'}$
                            {Math.abs(payment.amount_cents / 100).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          )
        })}
      </div>
    </Container>
  )
}
