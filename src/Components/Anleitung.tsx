import React from 'react';
import { Card, CardContent, Typography, Stack, CardMedia } from '@mui/material';
import hinweiseErfassen from '../Images/HinweiseErfassen.png';
import FestlegungDesHinweises from '../Images/FestlegungDesHinweises.png';
import TeamReflexion from '../Images/TeamReflexion.png';
import ProaktivHindernisseErkennen from '../Images/ProaktivHindernisseErkennen.png';
import GeminemsamesVerständnisDerBeteiligten from '../Images/GeminemsamesVerständnisDerBeteiligten.png';
import SensingDatenbank from '../Images/SensingDatenbank.png';
import FestlegungDerRahmenbedingung from '../Images/FestlegungDerRahmenbedingung.png';

type Step = {
  title: string;
  description: string[];
  image?: string;
}

const steps = [
  {
    title: 'Festlegung der Rahmenbedingung',
    description: [
      "Festlegung der Limitationen",
      "1. Detaillierte Beschreibung der Einschränkungen und Begrenzungen: Erfassen und Dokumentieren spezifischer Einschränkungen und Begrenzungen, die den Unlearning-Prozess beeinflussen könnten.",
      "2. Zuständigkeiten: Festlegen der Verantwortlichkeiten und Zuständigkeiten innerhalb der Organisation, um klare Strukturen und Verantwortungsbereiche zu schaffen.",
      "3. Liste der involvierten Personen oder Personengruppen: Zusammenstellen einer detaillierten Liste der beteiligten Personen oder Gruppen, um sicherzustellen, dass alle relevanten Stakeholder einbezogen und informiert werden.",
    ],
    image: FestlegungDerRahmenbedingung
  },
  {
    title: 'Hinweise erfassen',
    description: [
      "Sammeln und Reflektieren von Hinweisen, die auf die Notwendigkeit eines Unlearning-Prozesses hinweisen.",
      "1. Zusammenkommen der Mitarbeiter der öffentlichen Verwaltung.",
      "2. Identifizieren von externen Hinweisen wie neue Gesetze oder Vorschriften.",
      "3. Identifizieren von internen Hinweisen wie sinkende Effizienz oder veraltete Praktiken.",
      "Offene Diskussion über alle gesammelten Hinweise, um ein umfassendes Bild zu bekommen."
    ],
    image: hinweiseErfassen
  },
  {
    title: 'Festlegung des Hinweises',
    description: [
      "Auswahl des relevantesten Hinweises für die aktuelle Iteration.",
      "1. Besprechen aller gesammelten Hinweise aus Schritt 1.",
      "2. Evaluieren und Priorisieren der Hinweise basierend auf deren Relevanz und Dringlichkeit.",
      "Denjenigen Hinweis auswählen, der in dieser Iteration genauer untersucht werden soll."
    ],
    image: FestlegungDesHinweises
  },
  {
    title: 'Team Reflexion',
    description: [
      "Identifikation von hinderlichen Wissensstrukturen, die den ausgewählten Hinweis verursachen.",
      "1. Brainstorming-Sitzung mit dem Team.",
      "2. Identifizieren von veralteten oder hinderlichen Wissensstrukturen und Praktiken.",
      "3. Diskutieren, wie diese Strukturen den ausgewählten Hinweis beeinflussen.",
      "Dokumentieren der gefundenen hinderlichen Wissensstrukturen."
    ],
    image: TeamReflexion
  },
  {
    title: 'Proaktiv Hindernisse erkennen',
    description: [
      "Entwickeln von Strategien, um zukünftige Hindernisse frühzeitig zu erkennen.",
      "1. Diskussion über die in Schritt 3 identifizierten Hindernisse.",
      "2. Erarbeiten von Methoden und Indikatoren, um solche Hindernisse in Zukunft frühzeitig zu identifizieren.",
      "Festlegen von regelmäßigen Überprüfungen und Maßnahmen zur proaktiven Erkennung von Hindernissen."
    ],
    image: ProaktivHindernisseErkennen
  },
  {
    title: 'Gemeinsames Verständnis der Beteiligten',
    description: [
      "Einholen von Feedback von allen beteiligten Unternehmen oder Organisationen.",
      "1. Präsentation der identifizierten Hinweise und Hindernisse an alle relevanten Stakeholder.",
      "2. Sammeln von Rückmeldungen und Verbesserungsvorschlägen.",
      "3. Diskussion über mögliche Lösungen und Anpassungen basierend auf dem Feedback.",
      "Sicherstellen, dass alle Beteiligten ein gemeinsames Verständnis und eine Einigung über die nächsten Schritte haben."
    ],
    image: GeminemsamesVerständnisDerBeteiligten
  },
  {
    title: 'Eintragung in die Sensing Datenbank',
    description: [
      "Dokumentation der Ergebnisse in einer strukturierten und zugänglichen Form.",
      "1. Zusammenfassen der Ergebnisse aus den vorherigen Schritten.",
      "2. Erstellen einer Hinweis-Hindernis-Relation.",
      "3. Eintragen dieser Relation in die Sensing Datenbank.",
      "Bereitstellen der Daten für zukünftige Unlearning-Prozesse und kontinuierliche Verbesserung."
    ],
    image: SensingDatenbank
  }
];


type AnleitungProps = {
  index?: number;
}

const Anleitung: React.FC<AnleitungProps> = ({ index }) => {
  const renderStep = (step: Step, index: number) => (
    <Card key={index} sx={{bgcolor: '#f2f4ff', maxWidth: 1200}}>
      <CardContent>
        <Typography variant='h5' sx={{ mb: 2 }}>
          {index + 1}. {step.title} 
        </Typography>
        
          {step.description.map((description, index) => (
            <Typography key={index} variant='body1' color='text.secondary' sx={{ mb: 1 }}>
              {description}
            </Typography>
          ))}
        
        {step.image && (
          <CardMedia 
            component='img'
            height='500'
            image={step.image}
            alt={step.title}
            sx={{objectFit: 'contain'}}
          />
        )}
      </CardContent>
    </Card>
  );

  return (
    <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
      <Typography variant="h3" sx={{ marginBottom: 4, color: 'black' }}>
        Anleitung für das Unlearning-Tool
      </Typography>
      {index !== undefined ? (
        renderStep(steps[index], index - 1)
      ) : (
        steps.map((step, i) => renderStep(step, i - 1))
      )}
    </Stack>
  );
};

export { Anleitung };
