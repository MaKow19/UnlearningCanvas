import React from 'react';
import { Card, CardContent, Typography, Stack, CardMedia } from '@mui/material';
import testImage from '../Images/test.png'; // Beispiel für Bildimport



type Step = {
  title: string;
  description: string;
  image?: string;
}

const steps: Step[] = [
  {
    title: 'Hinweise erfassen',
    description: `Sammeln und Reflektieren von Hinweisen, die auf die Notwendigkeit eines Unlearning-Prozesses hinweisen.
      1. Zusammenkommen der Mitarbeiter der öffentlichen Verwaltung.
      2. Identifizieren von externen Hinweisen wie neue Gesetze oder Vorschriften.
      3. Identifizieren von internen Hinweisen wie sinkende Effizienz oder veraltete Praktiken.
      Offene Diskussion über alle gesammelten Hinweise, um ein umfassendes Bild zu bekommen.`,
    image: testImage
  },
  {
    title: 'Festlegung des Hinweises',
    description: `Auswahl des relevantesten Hinweises für die aktuelle Iteration.
      1. Besprechen aller gesammelten Hinweise aus Schritt 1.
      2. Evaluieren und Priorisieren der Hinweise basierend auf deren Relevanz und Dringlichkeit.
      Denjenigen Hinweis auswählen, der in dieser Iteration genauer untersucht werden soll.`
  },
  {
    title: 'Team Reflexion',
    description: `Identifikation von hinderlichen Wissensstrukturen, die den ausgewählten Hinweis verursachen.
      1. Brainstorming-Sitzung mit dem Team.
      2. Identifizieren von veralteten oder hinderlichen Wissensstrukturen und Praktiken.
      3. Diskutieren, wie diese Strukturen den ausgewählten Hinweis beeinflussen.
      Dokumentieren der gefundenen hinderlichen Wissensstrukturen.`
  },
  {
    title: 'Proaktiv Hindernisse erkennen',
    description: `Entwickeln von Strategien, um zukünftige Hindernisse frühzeitig zu erkennen.
      1. Diskussion über die in Schritt 3 identifizierten Hindernisse.
      2. Erarbeiten von Methoden und Indikatoren, um solche Hindernisse in Zukunft frühzeitig zu identifizieren.
      Festlegen von regelmäßigen Überprüfungen und Maßnahmen zur proaktiven Erkennung von Hindernissen.`
  },
  {
    title: 'Gemeinsames Verständnis der Beteiligten',
    description: `Einholen von Feedback von allen beteiligten Unternehmen oder Organisationen.
      1. Präsentation der identifizierten Hinweise und Hindernisse an alle relevanten Stakeholder.
      2. Sammeln von Rückmeldungen und Verbesserungsvorschlägen.
      3. Diskussion über mögliche Lösungen und Anpassungen basierend auf dem Feedback.
      Sicherstellen, dass alle Beteiligten ein gemeinsames Verständnis und eine Einigung über die nächsten Schritte haben.`
  },
  {
    title: 'Eintragung in die Sensing Datenbank',
    description: `Dokumentation der Ergebnisse in einer strukturierten und zugänglichen Form.
      1. Zusammenfassen der Ergebnisse aus den vorherigen Schritten.
      2. Erstellen einer Hinweis-Hindernis-Relation.
      3. Eintragen dieser Relation in die Sensing Datenbank.
      Bereitstellen der Daten für zukünftige Unlearning-Prozesse und kontinuierliche Verbesserung.`
  },
];

type AnleitungProps = {
  index?: number;
}

const Anleitung: React.FC<AnleitungProps> = ({ index }) => {
  const renderStep = (step: Step, index: number) => (
    <Card key={index}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          {index + 1}. {step.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {step.description}
        </Typography>
        {step.image && (
          <CardMedia 
            component='img'
            height='auto'
            image={step.image}
            alt={step.title}
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
        renderStep(steps[index], index)
      ) : (
        steps.map((step, i) => renderStep(step, i))
      )}
    </Stack>
  );
};

export { Anleitung };
