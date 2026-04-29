import abbyImg from "@/assets/abby-profile-new.png";
import tomImg from "@/assets/tom-profile.png";

const team = [
  {
    name: "Abby",
    image: abbyImg,
    bio: "Hi, I’m Abby — a biomedical engineering student, yoga and fitness teacher, and nutrition expert.\n\nI’m passionate about helping women prepare their bodies for pregnancy through detoxification, nourishment, movement, and the right lifestyle habits. My approach supports conception and a healthier pregnancy journey — whether you’re preconceiving, actively trying to conceive, or already pregnant.\n\nI created The Path to Pregnancy to cut through the confusion of modern toxins, ultra-processed foods, and hidden stressors so you can feel confident and empowered on your fertility path.",
    large: false,
  },
  {
    name: "Tom",
    image: tomImg,
    bio: "Hi, I’m Tom.\n\nI’ve spent years supporting women in gently improving their health, reducing stress, and preparing their bodies for conception.\n\nMy approach is calm and supportive, focusing on simple, nourishing habits around food, movement, and daily routine — without adding pressure or overwhelm. Alongside this, I offer a steady space to talk things through, helping you make sense of what you’re experiencing and find a way forward that feels right for you.\n\nTogether, we work to align your actions with your goals in a way that feels natural, manageable, and supportive of both your body and your wellbeing.",
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
            <div
              key={member.name}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
            >
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                loading="lazy"
                width={640}
                height={800}
                className="h-56 w-44 rounded-xl object-cover shadow-md"
              />
              <h3 className="mt-6 text-xl font-bold text-charcoal">{member.name}</h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
