import { FormReview } from "../forms/form-review";
import { Card, CardContent } from "../ui/card";

export default function CardFormReview() {
  return (
    <Card>
      <CardContent className="pt-6">
       <FormReview />
      </CardContent>
    </Card>
  );
}
