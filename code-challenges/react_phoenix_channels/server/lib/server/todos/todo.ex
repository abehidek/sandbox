defmodule Server.Todos.Todo do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:name, :completed, :id]}
  schema "todos" do
    field :completed, :boolean, default: false
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(todo, attrs) do
    todo
    |> cast(attrs, [:name, :completed])
    |> validate_required([:name, :completed])
  end
end
