defmodule Inmana.Restaurant do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}

  schema "restaurants" do
    field :email, :string
    field :name, :string
    field :age, :integer

    timestamps()
  end

  def changeset(params) do
    %__MODULE__{}
    |> cast(params, [:email, :name, :age])
    |> validate_required([:email, :name])
    |> validate_format(:email, ~r/@/)
    |> unique_constraint([:email])
  end
end
