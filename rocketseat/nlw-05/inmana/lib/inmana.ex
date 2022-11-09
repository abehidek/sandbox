defmodule Inmana do
  @moduledoc """
  Inmana keeps the contexts that define your domain
  and business logic.

  Contexts are also responsible for managing your data, regardless
  if it comes from the database, an external API or others.
  """

  defdelegate create_restaurant(params), to: Inmana.Restaurants.Create, as: :call
  defdelegate create_supply(params), to: Inmana.Supplies.Create, as: :call
  defdelegate get_supply(params), to: Inmana.Supplies.Get, as: :call
end
