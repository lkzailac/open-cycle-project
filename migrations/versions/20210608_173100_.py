"""empty message

Revision ID: 83b55759576d
Revises: ed0e74ef40e3
Create Date: 2021-06-08 17:31:00.406073

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '83b55759576d'
down_revision = 'ed0e74ef40e3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('products_transport_mode_id_fkey', 'products', type_='foreignkey')
    op.create_foreign_key(None, 'products', 'transport_modes', ['transport_mode_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'products', type_='foreignkey')
    op.create_foreign_key('products_transport_mode_id_fkey', 'products', 'factories', ['transport_mode_id'], ['id'])
    # ### end Alembic commands ###
