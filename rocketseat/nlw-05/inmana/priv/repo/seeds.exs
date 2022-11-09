# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Inmana.Repo.insert!(%Inmana.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

# Creating restaurants

Inmana.Repo.delete_all(Inmana.Supply)

Inmana.Repo.delete_all(Inmana.Restaurant)

{:ok, mcdonalds} = %{name: "McDonalds", email: "mc@donalds.com"} |> Inmana.create_restaurant()

%{
  restaurant_id: mcdonalds.id,
  description: "Carne moída",
  expiration_date: "2022-11-02",
  responsible: "Pedro"
}
|> Inmana.create_supply()

%{
  restaurant_id: mcdonalds.id,
  description: "Maionese",
  expiration_date: "2022-11-04",
  responsible: "Amanda"
}
|> Inmana.create_supply()

%{
  restaurant_id: mcdonalds.id,
  description: "Ketchup",
  expiration_date: "2022-11-08",
  responsible: "Amanda"
}
|> Inmana.create_supply()

%{
  restaurant_id: mcdonalds.id,
  description: "Mostarda",
  expiration_date: "2022-11-09",
  responsible: "Vitor"
}
|> Inmana.create_supply()

%{
  restaurant_id: mcdonalds.id,
  description: "Barbecue",
  expiration_date: "2022-11-13",
  responsible: "Cléber"
}
|> Inmana.create_supply()

%{
  restaurant_id: mcdonalds.id,
  description: "Molho ingles",
  expiration_date: "2022-11-15",
  responsible: "Daniel"
}
|> Inmana.create_supply()
