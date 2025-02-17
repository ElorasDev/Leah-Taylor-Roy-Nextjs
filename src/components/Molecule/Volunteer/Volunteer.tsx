import FormBillboard from '@/components/Atom/FormBillboard/FormBillboard'
import VolunteerForm from '@/components/Atom/Forms/VolunteerForm/VolunteerForm'

const Volunteer = () => {
    return (
        <section>
            <div className="py-36 px-8">
                <FormBillboard
                    image="Professional-Journey.webp"
                    contentBox={true}
                    pageTitle="Volunteer"
                    component={<VolunteerForm />}
                />
            </div>
        </section>
    )
}

export default Volunteer