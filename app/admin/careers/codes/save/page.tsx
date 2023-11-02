import AdminCodeSave from '@/domain/admin/careers/codes/save'

const AdminCodeSavePage = ({
  searchParams,
}: {
  searchParams: {
    codeId?: string
  }
}) => {
  return <AdminCodeSave codeId={searchParams.codeId} />
}
export default AdminCodeSavePage
