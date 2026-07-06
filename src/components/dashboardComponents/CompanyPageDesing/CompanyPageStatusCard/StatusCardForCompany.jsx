import {
    PersonFill,
    LocationArrowFill,
    Globe,
} from "@gravity-ui/icons";

export default function StatusCardForCompany() {
    const stats = [
        {
            id: 1,
            icon: PersonFill,
            value: "12,400+",
            label: "EMPLOYEES",
        },
        {
            id: 2,
            icon: LocationArrowFill,
            value: "San Francisco",
            label: "HEADQUARTERS",
        },
        {
            id: 3,
            icon: Globe,
            value: "24 Countries",
            label: "PRESENCE",
        },
    ];

    return (
        <section className="grid gap-6 md:grid-cols-3">
            {stats.map(({ id, icon: Icon, value, label }) => (
                <div
                    key={id}
                    className="rounded-2xl border border-white/5 bg-[#1E1E20] p-8"
                >
                    <Icon className="mb-3 h-6 w-6 text-zinc-300" />

                    <h3 className="text-2xl font-bold text-white">
                        {value}
                    </h3>

                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                        {label}
                    </p>
                </div>
            ))}
        </section>
    );
}