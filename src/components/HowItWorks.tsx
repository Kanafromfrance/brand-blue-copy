import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Estimation", desc: "Nous analysons votre bien et estimons son potentiel locatif gratuitement." },
  { num: "02", title: "Onboarding", desc: "Mise en place de l'annonce, shooting photo professionnel et optimisation." },
  { num: "03", title: "Gestion", desc: "Communication voyageurs, check-in/out, ménage et maintenance — tout est géré." },
  { num: "04", title: "Revenus", desc: "Vous recevez vos revenus chaque mois avec un reporting détaillé." },
];

const HowItWorks = () => (
  <section id="comment-ça-marche" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Comment ça marche ?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Un processus simple et transparent pour une gestion sans effort.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <span className="text-7xl font-bold text-primary/10 absolute -top-4 -left-2">{s.num}</span>
            <div className="pt-12">
              <h3 className="text-xl font-bold mb-2 font-sans">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-16 -right-4 text-primary/30 text-2xl">→</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
