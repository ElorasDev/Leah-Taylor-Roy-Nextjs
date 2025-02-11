import Billboard from '@/components/Atom/Billboard/Billboard';
import Services from '@/components/Atom/Services/Services';
import React from 'react'

const ConstituencyWork = () => {
    return (
        <section>
            <div className="py-28 px-5">
                <Billboard
                    image="Professional-Journey.webp"
                    contentBox={false}
                    pageTitle="MP Services"
                />
                <Services />
            </div>
        </section>
    )
}

export default ConstituencyWork;