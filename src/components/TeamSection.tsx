import abbyImg from "@/assets/abby-portrait.jpg";
import tomImg from "@/assets/tom-portrait.jpg";

const team = [
  {
    name: "Abby",
    image: abbyImg,
    bio: "BIO",
    large: false,
  },
  {
    name: "Tom",
    image: tomImg,
    bio: "BIO",
    large: false,
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-charcoal lg:text-4xl">Meet your team</h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-8 md:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                loading="lazy"
                width={640}
                height={800}
              className="h-56 w-44 rounded-xl object-cover shadow-md"
              />
              <h3 className="mt-6 text-xl font-bold text-charcoal">{member.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}