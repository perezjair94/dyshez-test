type Props = {
  status: string;
};
export default function PaymentStatus({ status }: Props) {
  switch (status) {
    case 'Rejected':
      return (
        <span className="rounded-full bg-[#FFEFF0] p-[4px] px-[12px] font-hauora text-[13px] font-semibold text-[#DC2B2B]">
          Rejected
        </span>
      );
    case 'Accepted':
      return (
        <span className="rounded-full bg-[#DEF2E6] p-[4px] px-[12px] font-hauora text-[13px] font-semibold text-[#11845B]">
          Acceted
        </span>
      );
  }
}
