import { z }           from 'zod';
import { useForm }     from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { GROCERIES, UTILITIES, ENTERTAINMENT } from '../categories';

const schema = z.object({
  description: z
            .string()
            .min(3, { message: 'Description must be atleast 3 characters' }),
  amount: z
            .number({ invalid_type_error: 'Amount field is required' })
            .min(0),
  category: z
            .enum([GROCERIES, UTILITIES, ENTERTAINMENT])
});

type ExpenseFormData = z.infer<typeof schema>;
interface ExpenseProps {
  handleExpenses: (data: ExpenseFormData & {id: string}) => void;
}

function ExpenseForm({ handleExpenses } : ExpenseProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: ExpenseFormData) => {
      const expense = {id: crypto.randomUUID(), ...data};
      handleExpenses(expense);
      reset();
    }
  
  return (
    <div className="form-container">
      <form className="user-form"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input id="description" type="text" className="form-control" { ...register('description', { required:true, minLength: 3 }) } />
          { errors.description && (<p className="text-danger">{errors.description.message}</p>) }
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input id="amount" type="text" className="form-control" {...register('amount', { required: true, valueAsNumber: true })} />
          { errors.amount && (<p className="text-danger">{errors.amount.message}</p>) }
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select className="form-select" aria-label="Default select" {...register('category', { required: true })}>
            <option value={GROCERIES}>Groceries</option>
            <option value={UTILITIES}>Utilities</option>
            <option value={ENTERTAINMENT}>Entertainment</option>
          </select>
          { errors.category && (<p className="text-danger">{errors.category.message}</p>) }
        </div>
        <button className="btn btn-primary" disabled={!isValid}>Submit</button>
      </form>
    </div>
  )
};

export default ExpenseForm;