import ServiceDetail from '../../../components/ServiceDetail';
import { servicesData } from '../../../data/servicesData';

export function generateStaticParams() {
    return servicesData.map((service) => ({
        serviceId: service.id,
    }));
}

export default function Page() {
    return <ServiceDetail />;
}
