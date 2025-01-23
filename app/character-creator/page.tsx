import Features from "../ui/character-creator/features"
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function Page() {
 
    return (
      <div className="flex justify-center items-center">
        <Card className="rounded-xl m-4 bg-muted/50">
          <CardHeader>
            <CardTitle>Create Your New Character</CardTitle>
          </CardHeader>
          <CardContent>
            Character features have an impact on game actions. Choose wisely as character details cannot be changed later.
          </CardContent>
          <CardFooter>
            Who will you be?
          </CardFooter>
        </Card>
      </div>
    )
  }